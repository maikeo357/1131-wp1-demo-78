CREATE TABLE blog_78 (
    id int not null primary key,
    title varchar(255),
    descrip text,
    category varchar(255),
    img text,
    remote_img text
)

insert into blog_78(id, title, description, category, img, remote_img)
values
(1, 'seven reasons why coffee is awesome', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', 'lifestyle', './images/photo-1.jpg', ''),
(2, 'travel to paris', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', 'travel', './images/photo-2.jpg', ''),
(3, 'seven reasons why coffee is awesome', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.', 'lifestyle', './images/photo-3.jpg', '')