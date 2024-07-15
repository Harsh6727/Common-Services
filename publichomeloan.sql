CREATE DATABASE  IF NOT EXISTS `publichomeloan` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `publichomeloan`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: publichomeloan
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
-- Table structure for table `publichomeloan`
--

DROP TABLE IF EXISTS `publichomeloan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publichomeloan` (
  `lender` varchar(1024) DEFAULT NULL,
  `upTo30Lakh` varchar(1024) DEFAULT NULL,
  `above30LakhTo75Lakh` varchar(1024) DEFAULT NULL,
  `above75Lakh` varchar(1024) DEFAULT NULL,
  `link` varchar(1024) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publichomeloan`
--

LOCK TABLES `publichomeloan` WRITE;
/*!40000 ALTER TABLE `publichomeloan` DISABLE KEYS */;
INSERT INTO `publichomeloan` VALUES ('Bank of Baroda','8.40% – 10.65%','8.40% – 10.65%','8.40% – 10.90%','https://www.bankofbaroda.in/personal-banking/loans/home-loan/baroda-home-loan'),('Punjab National Bank','8.45% – 10.25%','8.40% – 10.15%','8.40% – 10.15%','https://www.pnbindia.in/interst-rate-on-advances-linked-to-mclr.html'),('Punjab & Sind Bank','8.50% – 10.00%','8.50% – 10.00%','8.50% – 10.00%','https://punjabandsindbank.co.in/content/housing'),('State Bank of India','8.50% – 9.85%','8.50% – 9.85%','8.50% – 9.85%','https://sbi.co.in/web/interest-rates/interest-rates/loan-schemes-interest-rates/home-loans-interest-rates-current'),('Union Bank of India','8.35% – 10.75%','8.35% – 10.90%','8.35% – 10.90%','https://www.unionbankofindia.co.in/english/apply-online-home-loan.aspx'),('Bank of India','8.40% – 10.85%','8.40% – 10.85%','8.40% – 10.85%','https://bankofindia.co.in/home-loan'),('UCO Bank','8.45% – 10.30%','8.45% – 10.30%','8.45% – 10.30%','https://ucobank.com/home-loan'),('Bank of Maharashtra','8.35% – 11.15%','8.35% – 11.15%','8.35% – 11.15%','https://bankofmaharashtra.in/personal-banking/loans/home-loan'),('Canara Bank','8.50% – 11.25%','8.45% – 11.15%','8.45% – 11.15%','https://canarabank.com/housing-loan'),('Indian Overseas Bank','8.40% – 10.60%','8.40% – 10.60%','8.40% – 10.60%','https://www.iob.in/Housing-Loan-Subhagruha');
/*!40000 ALTER TABLE `publichomeloan` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-16  2:08:28
