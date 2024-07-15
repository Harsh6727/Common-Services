CREATE DATABASE  IF NOT EXISTS `privatehomeloan` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `privatehomeloan`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: privatehomeloan
-- ------------------------------------------------------
-- Server version	8.0.37

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
-- Table structure for table `privatehomeloan`
--

DROP TABLE IF EXISTS `privatehomeloan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `privatehomeloan` (
  `lender` varchar(1024) DEFAULT NULL,
  `upTo30Lakh` varchar(1024) DEFAULT NULL,
  `above30LakhTo75Lakh` varchar(1024) DEFAULT NULL,
  `above75Lakh` varchar(1024) DEFAULT NULL,
  `link` varchar(1024) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `privatehomeloan`
--

LOCK TABLES `privatehomeloan` WRITE;
/*!40000 ALTER TABLE `privatehomeloan` DISABLE KEYS */;
INSERT INTO `privatehomeloan` VALUES ('HDFC Bank Ltd.','8.75% onwards','8.75% onwards','8.75% onwards','https://www.hdfc.com/checklist/home-loan-interest-rates'),('Kotak Mahindra Bank','8.70% onwards','8.70% onwards','8.70% onwards','https://www.kotak.com/en/personal-banking/loans/home-loan/interest-rates.html'),('ICICI Bank','8.75% onwards','8.75% onwards','8.75% onwards','https://www.icicibank.com/personal-banking/loans/home-loan/interest-rates'),('Axis Bank','8.75% – 13.30%','8.75% – 13.30%','8.75% – 9.65%','https://www.axisbank.com/retail/loans/home-loan/axis-bank-home-loan/interest-rates-charges'),('Karur Vysya Bank','9.00% – 11.05%','9.00% – 11.05%','9.00% – 11.05%','https://www.kvb.co.in/personal/loans/home-loans/happy-home-loans/'),('South Indian Bank','8.70% – 11.70%','8.70% – 11.70%','8.70% – 11.70%','https://www.southindianbank.com/content/personal-banking/home-loan/749'),('Karnataka Bank','8.50% – 10.62%','8.50% – 10.62%','8.50% – 10.62%','https://karnatakabank.com/personal/loans/home-loans'),('Federal Bank','8.80% onwards','8.80% onwards','8.80% onwards','https://www.federalbank.co.in/home-loan-interest-rate'),('Dhanlaxmi Bank','9.35% – 10.50%','9.35% – 10.50%','9.35% – 10.50%','https://www.dhanbank.com/home-loans/'),('RBL Bank','8.90% onwards','8.90% onwards','8.90% onwards','https://www.rblbank.com/personal-banking/loans/housing-loan/?tabName=why-us');
/*!40000 ALTER TABLE `privatehomeloan` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-16  2:08:03
