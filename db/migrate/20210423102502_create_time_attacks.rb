class CreateTimeAttacks < ActiveRecord::Migration[6.0]
  def change
    create_table :time_attacks do |t|
      t.references :user, null: false, foreign_key: true
      t.integer :finish_time, null: false
      t.integer :miss_count, null: false
      t.integer :incorrect_answer, null: false
      t.boolean :answer_display, null: false, default: true
      t.integer :addition_time, null: false
      t.integer :result_time, null: false

      t.timestamps
    end
  end
end
