To run this project : Kept your code directory "Uride" into htdocs

Create a database named "Uride" and import the "urieds.sql" files or manually create a table named "users" as

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO"; START TRANSACTION; SET time_zone = "+00:00";

CREATE TABLE contacts ( id int(11) NOT NULL, name varchar(100) NOT NULL, email varchar(100) NOT NULL, subject varchar(200) NOT NULL, message text NOT NULL, created_at timestamp NOT NULL DEFAULT current_timestamp() ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE cycles ( cycle_id int(11) NOT NULL, location varchar(255) NOT NULL, is_available tinyint(4) NOT NULL ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE cycle_rentals ( rental_id int(11) NOT NULL, user_id int(11) DEFAULT NULL, cycle_id int(11) DEFAULT NULL, rental_start_time datetime NOT NULL, rental_end_time datetime DEFAULT NULL, status enum('rented','returned') NOT NULL, phone varchar(11) NOT NULL ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE declined_requests ( id int(11) NOT NULL, user_id int(11) NOT NULL, ride_id int(11) NOT NULL ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE garages ( garage_id int(11) NOT NULL, name varchar(100) NOT NULL, address varchar(255) NOT NULL, phone varchar(20) DEFAULT NULL, latitude float NOT NULL, longitude float NOT NULL ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

CREATE TABLE messages ( id int(11) NOT NULL, sender_id int(11) NOT NULL, receiver_id int(11) NOT NULL, message text NOT NULL, timestamp timestamp NOT NULL DEFAULT current_timestamp() ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
