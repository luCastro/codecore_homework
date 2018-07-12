# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Comment.destroy_all
Post.destroy_all

50.times do
    p = Post.create(
        title: Faker::Book.title,
        body: Faker::Lorem.paragraph(2, true)
    )

    if p.valid?
        rand(1..5).times do
            Comment.create(
                body: Faker::Lorem.paragraph(2, true),
                post: p
            )
        end
    end
end

posts= Post.all
coments = Comment.all

puts Cowsay.say "Created #{posts.count} posts", :ghostbusters
puts Cowsay.say "Created #{coments.count} posts", :ghostbusters



