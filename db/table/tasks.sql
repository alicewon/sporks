CREATE DATABASE IF NOT EXISTS sporksdb;

use sporksdb;

CREATE TABLE IF NOT EXISTS `tasks`(
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item` varchar(255) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `completed` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
);

