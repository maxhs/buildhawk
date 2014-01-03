class AddCountToReportUsers < ActiveRecord::Migration
  def change
  	add_column :subs, :count, :integer, :default => 0
  	add_column :report_subs, :count, :integer, :default => 0
  	add_column :subs, :punchlist_item_id, :integer
  	add_column :subs, :contact_name, :string
  	add_attachment :subs, :image
  end
end
