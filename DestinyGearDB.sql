-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: destinygearinfo
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `armor`
--

DROP TABLE IF EXISTS `armor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `armor` (
  `Armor_Name` varchar(45) NOT NULL,
  `Armor_Pwr_Max` double DEFAULT NULL,
  `Armor_Type` varchar(45) DEFAULT NULL,
  `Class_ID` varchar(45) NOT NULL,
  `Rarity_ID` varchar(45) NOT NULL,
  PRIMARY KEY (`Armor_Name`),
  UNIQUE KEY `Armor_Name_UNIQUE` (`Armor_Name`),
  KEY `class_id` (`Class_ID`) /*!80000 INVISIBLE */,
  KEY `fk_armor_rarity1_idx` (`Rarity_ID`),
  CONSTRAINT `class_id` FOREIGN KEY (`Class_ID`) REFERENCES `class` (`Class_ID`),
  CONSTRAINT `rarity_id` FOREIGN KEY (`Rarity_ID`) REFERENCES `rarity` (`Rarity_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `armor`
--

LOCK TABLES `armor` WRITE;
/*!40000 ALTER TABLE `armor` DISABLE KEYS */;
INSERT INTO `armor` VALUES ('Nezarec\'s' Sin',1326,'Warlock','Exotic','Helmet');
/*!40000 ALTER TABLE `armor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `class`
--

DROP TABLE IF EXISTS `class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `class` (
  `Class_ID` varchar(45) NOT NULL,
  PRIMARY KEY (`Class_ID`),
  UNIQUE KEY `Class_ID_UNIQUE` (`Class_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class`
--

LOCK TABLES `class` WRITE;
/*!40000 ALTER TABLE `class` DISABLE KEYS */;
/*!40000 ALTER TABLE `class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ghost`
--

DROP TABLE IF EXISTS `ghost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ghost` (
  `Ghost_Name` varchar(45) NOT NULL,
  `Rarity_ID` varchar(45) NOT NULL,
  PRIMARY KEY (`Ghost_Name`),
  KEY `rariy_id_ghost` (`Rarity_ID`),
  CONSTRAINT `rarity__ghost` FOREIGN KEY (`Rarity_ID`) REFERENCES `rarity` (`Rarity_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ghost`
--

LOCK TABLES `ghost` WRITE;
/*!40000 ALTER TABLE `ghost` DISABLE KEYS */;
INSERT INTO `ghost` VALUES ('Cosmographicum Shell','Exotic');
/*!40000 ALTER TABLE `ghost` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rarity`
--

DROP TABLE IF EXISTS `rarity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rarity` (
  `Rarity_ID` varchar(45) NOT NULL,
  PRIMARY KEY (`Rarity_ID`),
  UNIQUE KEY `Rarity_ID_UNIQUE` (`Rarity_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rarity`
--

LOCK TABLES `rarity` WRITE;
/*!40000 ALTER TABLE `rarity` DISABLE KEYS */;
/*!40000 ALTER TABLE `rarity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `weapon`
--

DROP TABLE IF EXISTS `weapon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `weapon` (
  `Weapon_Name` varchar(45) NOT NULL,
  `Weapon_Pwr_Max` double DEFAULT NULL,
  `Weapon_Dmg_Typ` varchar(45) DEFAULT NULL,
  `Weapon_Type` varchar(45) DEFAULT NULL,
  `Rarity_ID` varchar(45) NOT NULL,
  PRIMARY KEY (`Weapon_Name`),
  UNIQUE KEY `Weapon_Name_UNIQUE` (`Weapon_Name`),
  KEY `rarity_id_weapon` (`Rarity_ID`),
  CONSTRAINT `rarity_id_weapon` FOREIGN KEY (`Rarity_ID`) REFERENCES `rarity` (`Rarity_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weapon`
--

LOCK TABLES `weapon` WRITE;
/*!40000 ALTER TABLE `weapon` DISABLE KEYS */;
INSERT INTO `weapon` VALUES ('Ager\'s Scepter',1330,'Stasis','Trace Rifle','Exotic');
/*!40000 ALTER TABLE `weapon` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: destinygearinfo
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `itemnames`
--

DROP TABLE IF EXISTS `itemnames`;


CREATE TABLE `itemnames` (
  `Name` varchar(100) DEFAULT NULL,
  `Power` int DEFAULT NULL,
  `Type` varchar(100) DEFAULT NULL,
  `Class_ID` varchar(100) DEFAULT NULL,
  `Rarity_ID` varchar(100) DEFAULT NULL
) ;


--
-- Dumping data for table `itemnames`
--

LOCK TABLES `itemnames` WRITE;
 ALTER TABLE `itemnames` DISABLE KEYS ;
INSERT INTO `itemnames` VALUES ('Cosmographicum Shell',NULL,NULL,NULL,'Exotic'),('Nezarec\'s Sin',1330,'Helmet','Warlock','Exotic'),('Phoenix Strife Type 0 Helm',1330,'Helmet','Titan','Legendary'),('Ager\'s Scepter',1330,'Stasis','Trace Rifle','Exotic'),('BrayTech Werewolf',1330,'Kinetic','Auto Rifle','Legendary'),('BrayTech Winter Wolf',1100,'Kinetic','Auto Rifle','Legendary'),('Breakneck',1100,'Kinetic','Auto Rifle','Legendary'),('Chroma Rush',1330,'Kinetic','Auto Rifle','Legendary'),('Chrysura Melo',1330,'Solar','Auto Rifle','Legendary'),('Duty Bound',1100,'Kinetic','Auto Rifle','Legendary'),('Ether Doctor',1100,'Kinetic','Auto Rifle','Legendary'),('False Promises',1330,'Kinetic','Auto Rifle','Legendary'),('Foregone Conclusion',1100,'Kinetic','Auto Rifle','Legendary'),('Gahlran\'s Right Hand',1100,'Kinetic','Auto Rifle','Legendary'),('Ghost Primus',1100,'Kinetic','Auto Rifle','Legendary'),('Half Dan-D',1100,'Kinetic','Auto Rifle','Legendary'),('Hazard of the Cast',1100,'Kinetic','Auto Rifle','Legendary'),('Horror Story',1330,'Kinetic','Auto Rifle','Legendary'),('Perseverance',1100,'Solar','Auto Rifle','Legendary'),('Scathelocke',1330,'Kinetic','Auto Rifle','Legendary'),('Scathelocke S1',1100,'Kinetic','Auto Rifle','Legendary'),('Seventh Seraph Carbine',1330,'Kinetic','Auto Rifle','Legendary'),('Shadow Price',1330,'Arc','Auto Rifle','Legendary'),('Shadow Price (Adept)',1330,'Arc','Auto Rifle','Legendary'),('Solemn Hymn',1100,'Void','Auto Rifle','Legendary'),('Sorrow\'s Veres',1330,'Arc','Auto Rifle','Legendary'),('The Forward Path',1330,'Kinetic','Auto Rifle','Legendary'),('The Last Breath',1330,'Kinetic','Auto Rifle','Legendary'),('The Number',1330,'Arc','Auto Rifle','Legendary'),('The Summoner (Adept)',1330,'Solar','Auto Rifle','Legendary'),('Tigerspite',1330,'Kinetic','Auto Rifle','Legendary'),('Uriel\'s Gift S1',1100,'Arc','Auto Rifle','Legendary'),('Valakadyn S1',1100,'Solar','Auto Rifle','Legendary'),('ALLY',1100,'asdfasd','Helmet','Legendary');
 ALTER TABLE `itemnames` ENABLE KEYS ;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE TRIGGER `updatepowerweapon` AFTER UPDATE ON `itemnames` FOR EACH ROW begin
	update weapon, itemnames set weapon.Power = itemnames.Power where weapon.Name = itemnames.Name;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE  TRIGGER `updatepowerarmor` AFTER UPDATE ON `itemnames` FOR EACH ROW begin
	update armor, itemnames set armor.Power = itemnames.Power where armor.Name = itemnames.Name;
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE TRIGGER `deleteitemnames` AFTER DELETE ON `itemnames` FOR EACH ROW begin
	delete from ghost where ghost.Name not in (select Name from itemnames);
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE TRIGGER `deleteitemnames2` AFTER DELETE ON `itemnames` FOR EACH ROW begin
	delete from armor where armor.Name not in (select Name from itemnames);
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE TRIGGER `deleteitemnames3` AFTER DELETE ON `itemnames` FOR EACH ROW begin
	delete from weapon where weapon.Name not in (select Name from itemnames);
end ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-06 20:39:23


-- Dump completed on 2021-11-06 11:19:16
