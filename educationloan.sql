CREATE DATABASE  IF NOT EXISTS `educationloan` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `educationloan`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: educationloan
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
-- Table structure for table `educationloan`
--

DROP TABLE IF EXISTS `educationloan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `educationloan` (
  `lender` varchar(1024) DEFAULT NULL,
  `interest` varchar(1024) DEFAULT NULL,
  `link` varchar(1024) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `educationloan`
--

LOCK TABLES `educationloan` WRITE;
/*!40000 ALTER TABLE `educationloan` DISABLE KEYS */;
INSERT INTO `educationloan` VALUES ('State Bank of India','8.55%','https://sbi.co.in/web/personal-banking/loans/education-loans'),('Punjab National Bank','8.55%','https://www.pnbindia.in/education.html'),('IDBI Bank','10.60% - 11.10%','https://www.idbibank.in/education-loan.aspx'),('Kotak Mahindra Bank','Up to 16%','https://www.kotak.com/en/personal-banking/loans/education-loan.html'),('Axis Bank','13.70% - 15.20%','https://www.axisbank.com/retail/loans/education-loan/interest-rates-charges'),('Bank of India','8.40% – 10.85%','https://bankofindia.co.in/education-loan'),('Karnataka Bank','9.94% - 12.84%','https://karnatakabank.com/personal/loans/vidya-nidhi'),('Canara Bank','9.25%','https://canarabank.com/iba-model-education-loan-scheme'),('ICICI Bank','9.85%','https://www.icicibank.com/personal-banking/loans/education-loan'),('HDFC Bank','9.50%','https://www.hdfcbank.com/personal/borrow/popular-loans/educational-loan/educational-loan-for-indian-education/fees-and-charges');
/*!40000 ALTER TABLE `educationloan` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-16  2:02:03
