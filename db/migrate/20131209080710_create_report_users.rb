class CreateReportUsers < ActiveRecord::Migration
  def change
    create_table :report_users do |t|
    	t.belongs_to :report
    	t.belongs_to :user
        t.string :full_name
      	t.timestamps
    end

    add_column :companies, :pre_register, :boolean
    add_column :companies, :contact_name, :string
    add_column :reports, :weather, :text
    add_column :report_fields, :report_id, :integer
  end
end
