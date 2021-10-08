CREATE DATABASE IF NOT EXISTS sporksdb;

use sporksdb;

CREATE TABLE IF NOT EXISTS `tasks`(
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item` varchar(255) NOT NULL,
  `created` date DEFAULT NULL,
  `completed` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

