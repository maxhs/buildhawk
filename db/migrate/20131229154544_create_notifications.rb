class CreateNotifications < ActiveRecord::Migration
  def change
    create_table :notifications do |t|
    	t.boolean :read, :default => false
    	t.boolean :sent, :default => false
    	t.belongs_to :user
    	t.belongs_to :report
    	t.belongs_to :punchlist_item
    	t.belongs_to :checklist_item
    	t.text :message
    	t.string :notification_type
      t.timestamps
    end
    add_column :checklist_items, :photos_count, :integer
    add_column :checklist_items, :comments_count, :integer
    add_column :punchlist_items, :photos_count, :integer
    add_column :punchlist_items, :comments_count, :integer
  end
end
