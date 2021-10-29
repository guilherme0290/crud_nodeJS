-- MySQL dump 10.13  Distrib 5.7.31, for Win64 (x86_64)
--
-- Host: localhost    Database: teste_multicoisas
-- ------------------------------------------------------
-- Server version	5.7.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `codigo` int(11) NOT NULL,
  `nome` varchar(128) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,11,'agua sana','2021-10-28 02:12:44','2021-10-28 02:26:39'),(2,15,'escova de dente','2021-10-28 02:30:01','2021-10-28 02:30:01'),(3,15,'escova de dente','2021-10-28 22:40:39','2021-10-28 22:40:39');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clientes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `codigo` int(11) NOT NULL,
  `nome` varchar(128) NOT NULL,
  `data_nascimento` datetime DEFAULT NULL,
  `email` varchar(32) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,1,'janivasdo','2021-10-21 00:00:00','teste@teste.com.br','2021-10-28 03:55:12','2021-10-28 03:56:05'),(2,1,'jani','2021-10-28 00:00:00','teste@teste.com.br','2021-10-28 03:55:24','2021-10-28 03:55:24'),(3,1,'jani','2021-10-28 00:00:00','teste@teste.com.br','2021-10-29 01:36:02','2021-10-29 01:36:02'),(4,1,'','2021-10-28 00:00:00','teste@teste.com.br','2021-10-29 01:36:10','2021-10-29 01:36:10'),(5,1,'teste','2021-10-28 00:00:00','teste@teste.com.br','2021-10-29 01:43:47','2021-10-29 01:43:47'),(6,1,'teste','2021-10-28 00:00:00','teste@teste.com.br','2021-10-29 01:50:44','2021-10-29 01:50:44'),(7,1,'teste','2021-10-28 00:00:00','teste@teste.com.br','2021-10-29 02:28:09','2021-10-29 02:28:09'),(8,1,'teste','1996-10-28 00:00:00','teste@teste.com.br','2021-10-29 02:35:10','2021-10-29 02:35:10'),(9,1,'teste','1996-10-28 00:00:00','teste@teste.com.br','2021-10-29 02:35:30','2021-10-29 02:35:30'),(10,1,'teste','1996-10-28 00:00:00','teste@teste.com.br','2021-10-29 02:35:47','2021-10-29 02:35:47'),(11,1,'teste','1996-10-28 00:00:00','teste@teste.com.br','2021-10-29 02:36:00','2021-10-29 02:36:00'),(12,1,'teste','1996-10-28 00:00:00','teste@teste.com.br','2021-10-29 02:40:20','2021-10-29 02:40:20');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estoques`
--

DROP TABLE IF EXISTS `estoques`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estoques` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantidade` int(11) NOT NULL,
  `preco` decimal(15,2) NOT NULL,
  `produto_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `produto_id` (`produto_id`),
  CONSTRAINT `estoques_ibfk_1` FOREIGN KEY (`produto_id`) REFERENCES `produtos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estoques`
--

LOCK TABLES `estoques` WRITE;
/*!40000 ALTER TABLE `estoques` DISABLE KEYS */;
INSERT INTO `estoques` VALUES (2,2,110.30,4,'2021-10-28 03:38:07','2021-10-28 03:42:55'),(3,5,110.40,3,'2021-10-28 03:38:29','2021-10-28 03:38:29'),(4,5,110.40,3,'2021-10-29 01:19:45','2021-10-29 01:19:45'),(5,5,110.40,3,'2021-10-29 01:21:04','2021-10-29 01:21:04'),(10,5,110.40,3,'2021-10-29 01:24:42','2021-10-29 01:24:42');
/*!40000 ALTER TABLE `estoques` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `produtos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `codigo` int(11) NOT NULL,
  `nome` varchar(128) NOT NULL,
  `descricao` varchar(1024) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoria_id` (`categoria_id`),
  CONSTRAINT `produtos_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (3,2,'pasta de amendoin','pasta de amendoin',1,'2021-10-28 03:14:10','2021-10-28 03:14:10'),(4,2,'creme dental','creme dental',2,'2021-10-28 03:14:45','2021-10-28 03:14:45');
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vendas`
--

DROP TABLE IF EXISTS `vendas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vendas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `codigo` int(11) NOT NULL,
  `valor` decimal(15,2) NOT NULL,
  `data_venda` datetime NOT NULL,
  `cliente_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `cliente_id` (`cliente_id`),
  CONSTRAINT `vendas_ibfk_1` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vendas`
--

LOCK TABLES `vendas` WRITE;
/*!40000 ALTER TABLE `vendas` DISABLE KEYS */;
INSERT INTO `vendas` VALUES (1,1,16.00,'2021-10-28 00:00:00',1,'2021-10-28 04:08:52','2021-10-28 04:10:17'),(2,1,14.40,'2021-10-28 00:00:00',5,'2021-10-29 02:22:10','2021-10-29 02:22:10');
/*!40000 ALTER TABLE `vendas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'teste_multicoisas'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-28 23:45:00
