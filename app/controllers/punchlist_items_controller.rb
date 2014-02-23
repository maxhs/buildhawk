class PunchlistItemsController < ApplicationController
	def update
		@punchlist_item = PunchlistItem.find params[:punchlist_item_id]
		if params[:punchlist_item][:assignee_attributes].present?
			user = User.where(:full_name => params[:punchlist_item][:assignee_attributes][:full_name]).first
			params[:punchlist_item].delete(:assignee_attributes)
			if user
				@punchlist_item.update_attribute :assignee_id, user.id
			else
				@punchlist_item.update_attribute :assignee_id, nil
			end
		end
		@punchlist_item.update_attributes params[:punchlist_item]
		if @punchlist_item.completed == true
			@punchlist_item.update_attributes :completed_by_user_id => user.id, :completed_at => Time.now
		else
			@punchlist_item.update_attributes :completed_by_user_id => nil, :completed_at => nil
		end

		@punchlist = @punchlist_item.punchlist
		@items = @punchlist.punchlist_items
		@project = @punchlist.project 
		
		if request.xhr?
			respond_to do |format|
				format.js { render :template => "projects/worklist"}
			end
		else 
			redirect_to worklist_project_path(@project)
		end

	end
		
	def destroy
		item = PunchlistItem.find params[:id]
		@punchlist = item.punchlist
		@items = @punchlist.punchlist_items
		@project = @punchlist.project
		item.destroy
		if request.xhr?
			respond_to do |format|
				format.js {render template: "projects/worklist"}
			end
		else
			redirect_to worklist_project_path(@project)
		end
	end

	def generate
		@item = PunchlistItem.find params[:id]
		@project = @item.punchlist.project
		if @item.assignee
			@recipient = @item.assignee
			PunchlistItemMailer.punchlist_item(@item,@recipient).deliver
		elsif @item.sub_assignee
			@recipient = @item.sub_assignee
			PunchlistItemMailer.punchlist_item(@item,@recipient).deliver
		end
		if request.xhr?
			respond_to do |format|
				format.js
			end
		else
			redirect_to worklist_project_path(@project)
		end
	end
end
