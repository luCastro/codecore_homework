class Post < ApplicationRecord
    has_many :comments, dependent: :destroy
#Validates
#title must be unique
#body must be present and contain at least 50 characters

    validates(:title, presence: true, uniqueness: true )

    validates(
        :body, presence: true,
        length: {
            minimum: 50, 
            maximum: 2048
        }
    )

    before_validation :set_default_title

    private
    def set_default_title
        self.title = self.title.capitalize
    end

end
