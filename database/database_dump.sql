-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: placementdb
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `certifications`
--

DROP TABLE IF EXISTS `certifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `certifications` (
  `certification_id` int NOT NULL AUTO_INCREMENT,
  `student_id` int NOT NULL,
  `certification_name` varchar(100) NOT NULL,
  `issue_date` date NOT NULL,
  PRIMARY KEY (`certification_id`),
  KEY `idx_student_id` (`student_id`),
  CONSTRAINT `certifications_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `certifications`
--

LOCK TABLES `certifications` WRITE;
/*!40000 ALTER TABLE `certifications` DISABLE KEYS */;
INSERT INTO `certifications` VALUES (1,1,'AWS Certified Solutions Architect','2023-01-15'),(2,1,'Google Cloud Professional Data Engineer','2023-03-20'),(3,2,'Microsoft Azure Fundamentals','2023-02-10'),(4,3,'Oracle Certified Java Programmer','2023-04-05');
/*!40000 ALTER TABLE `certifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `companies` (
  `company_id` int NOT NULL AUTO_INCREMENT,
  `company_name` varchar(100) NOT NULL,
  `website` varchar(100) DEFAULT NULL,
  `contact_email` varchar(100) NOT NULL,
  PRIMARY KEY (`company_id`),
  UNIQUE KEY `company_name` (`company_name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
INSERT INTO `companies` VALUES (1,'Google','https://www.google.com','careers@google.com'),(2,'Microsoft','https://www.microsoft.com','recruitment@microsoft.com'),(3,'Amazon','https://www.amazon.com','university@amazon.com'),(4,'Infosys','https://www.infosys.com','campus@infosys.com');
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedback` (
  `feedback_id` int NOT NULL AUTO_INCREMENT,
  `student_id` int DEFAULT NULL,
  `company_id` int DEFAULT NULL,
  `feedback_text` text NOT NULL,
  `feedback_date` date NOT NULL,
  PRIMARY KEY (`feedback_id`),
  KEY `fk_feedback_student` (`student_id`),
  KEY `fk_feedback_company` (`company_id`),
  CONSTRAINT `fk_feedback_company` FOREIGN KEY (`company_id`) REFERENCES `companies` (`company_id`) ON DELETE SET NULL,
  CONSTRAINT `fk_feedback_student` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`) ON DELETE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback`
--

LOCK TABLES `feedback` WRITE;
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
INSERT INTO `feedback` VALUES (1,1,2,'Great experience working with the company!','2024-10-01'),(2,NULL,1,'The recruitment process was very smooth.','2025-01-05'),(3,20,NULL,'The student showed excellent skills during the internship.','2024-11-10');
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `internships`
--

DROP TABLE IF EXISTS `internships`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `internships` (
  `internship_id` int NOT NULL AUTO_INCREMENT,
  `student_id` int NOT NULL,
  `company_name` varchar(100) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `role` varchar(100) NOT NULL,
  PRIMARY KEY (`internship_id`),
  KEY `student_id` (`student_id`),
  CONSTRAINT `internships_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `internships`
--

LOCK TABLES `internships` WRITE;
/*!40000 ALTER TABLE `internships` DISABLE KEYS */;
INSERT INTO `internships` VALUES (1,1,'Google','2023-06-01','2023-08-31','Software Engineer Intern'),(2,1,'Microsoft','2023-01-15','2023-04-15','Data Science Intern'),(3,2,'Amazon','2023-05-01','2023-07-31','Cloud Engineer Intern'),(4,3,'Infosys','2023-03-01','2023-05-31','Full Stack Developer Intern');
/*!40000 ALTER TABLE `internships` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offers`
--

DROP TABLE IF EXISTS `offers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `offers` (
  `offer_id` int NOT NULL AUTO_INCREMENT,
  `student_id` int NOT NULL,
  `company_id` int NOT NULL,
  `ctc` decimal(10,2) NOT NULL,
  `offer_date` date NOT NULL,
  PRIMARY KEY (`offer_id`),
  KEY `fk_student` (`student_id`),
  KEY `fk_company` (`company_id`),
  CONSTRAINT `fk_company` FOREIGN KEY (`company_id`) REFERENCES `companies` (`company_id`) ON DELETE CASCADE,
  CONSTRAINT `fk_student` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offers`
--

LOCK TABLES `offers` WRITE;
/*!40000 ALTER TABLE `offers` DISABLE KEYS */;
INSERT INTO `offers` VALUES (3,1,2,6.00,'2024-12-15'),(4,2,2,7.00,'2024-12-15');
/*!40000 ALTER TABLE `offers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `placement_drives`
--

DROP TABLE IF EXISTS `placement_drives`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `placement_drives` (
  `drive_id` int NOT NULL AUTO_INCREMENT,
  `company_id` int NOT NULL,
  `drive_date` date NOT NULL,
  `status` enum('Upcoming','Ongoing','Completed') NOT NULL,
  PRIMARY KEY (`drive_id`),
  KEY `company_id` (`company_id`),
  CONSTRAINT `placement_drives_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `companies` (`company_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `placement_drives`
--

LOCK TABLES `placement_drives` WRITE;
/*!40000 ALTER TABLE `placement_drives` DISABLE KEYS */;
INSERT INTO `placement_drives` VALUES (1,1,'2025-04-15','Upcoming'),(2,2,'2024-12-20','Completed'),(3,3,'2023-05-05','Upcoming'),(4,4,'2023-11-10','Completed');
/*!40000 ALTER TABLE `placement_drives` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects` (
  `project_id` int NOT NULL AUTO_INCREMENT,
  `student_id` int NOT NULL,
  `project_name` varchar(100) NOT NULL,
  `description` text,
  `completion_date` date NOT NULL,
  PRIMARY KEY (`project_id`),
  KEY `idx_student_id` (`student_id`),
  CONSTRAINT `projects_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (1,1,'E-Commerce Website','Developed a fully functional e-commerce website using React and Node.js.','2023-05-15'),(2,1,'AI Chatbot','Built an AI-powered chatbot using Python and TensorFlow.','2023-07-20'),(3,2,'Library Management System','Designed a library management system using Java and MySQL.','2023-06-10'),(4,3,'Weather App','Created a weather application using Flutter and OpenWeatherMap API.','2023-08-05');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skills`
--

DROP TABLE IF EXISTS `skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skills` (
  `skill_id` int NOT NULL AUTO_INCREMENT,
  `skill_name` varchar(100) NOT NULL,
  PRIMARY KEY (`skill_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skills`
--

LOCK TABLES `skills` WRITE;
/*!40000 ALTER TABLE `skills` DISABLE KEYS */;
INSERT INTO `skills` VALUES (1,'Python'),(2,'SQL'),(3,'Java'),(4,'JavaScript'),(5,'Data Analysis');
/*!40000 ALTER TABLE `skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_skills`
--

DROP TABLE IF EXISTS `student_skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_skills` (
  `student_id` int NOT NULL,
  `skill_id` int NOT NULL,
  `proficiency` enum('Beginner','Intermediate','Advanced') DEFAULT NULL,
  PRIMARY KEY (`student_id`,`skill_id`),
  KEY `skill_id` (`skill_id`),
  CONSTRAINT `student_skills_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`),
  CONSTRAINT `student_skills_ibfk_2` FOREIGN KEY (`skill_id`) REFERENCES `skills` (`skill_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_skills`
--

LOCK TABLES `student_skills` WRITE;
/*!40000 ALTER TABLE `student_skills` DISABLE KEYS */;
INSERT INTO `student_skills` VALUES (1,1,'Beginner'),(1,2,'Intermediate'),(2,1,'Advanced'),(2,3,'Intermediate'),(3,4,'Beginner');
/*!40000 ALTER TABLE `student_skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `student_id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `degree` varchar(50) DEFAULT NULL,
  `cgpa` decimal(3,2) DEFAULT NULL,
  `skills` text,
  `year_of_graduation` year NOT NULL,
  `status` enum('Placed','Unplaced') DEFAULT 'Unplaced',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`student_id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `phone` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,'Sunita','Shakuniya','sunita@example.com','9876543210','B.E. Computer Science',8.60,'React, Python, MySQL',2025,'Unplaced','2025-02-22 13:07:49'),(2,'Amit','Verma','amit@example.com','9123456789','B.Tech IT',7.90,'Java, Spring Boot, MongoDB',2024,'Placed','2025-02-22 13:07:49'),(3,'Amit','Sharma','amit.sharma@example.com','9876543211','B.E. Computer Science',8.20,'Python, Django, MySQL',2025,'Unplaced','2025-02-22 13:14:13'),(4,'Priya','Verma','priya.verma@example.com','9123456781','B.Tech IT',7.80,'Java, Spring Boot, MongoDB',2024,'Placed','2025-02-22 13:14:13'),(5,'Rahul','Patel','rahul.patel@example.com','9988776652','B.E. Electronics',8.00,'Embedded Systems, C++, IoT',2025,'Unplaced','2025-02-22 13:14:13'),(6,'Neha','Singh','neha.singh@example.com','8899776653','B.Tech CSE',9.10,'React, Node.js, Firebase',2025,'Placed','2025-02-22 13:14:13'),(7,'Vikas','Raj','vikas.raj@example.com','9876541234','B.E. Mechanical',7.50,'AutoCAD, SolidWorks',2024,'Unplaced','2025-02-22 13:14:13'),(8,'Sumit','Shakuniya','sumita@example.com','9998887771','B.E. Computer Science',8.60,'React, Python, MySQL',2025,'Unplaced','2025-02-22 13:14:13'),(9,'Megha','Joshi','megha.joshi@example.com','8765432105','B.Tech AI & ML',8.90,'TensorFlow, Deep Learning',2025,'Placed','2025-02-22 13:14:13'),(10,'Suresh','Kumar','suresh.kumar@example.com','9988998872','B.E. Civil',7.20,'Structural Analysis, SAP2000',2024,'Unplaced','2025-02-22 13:14:13'),(11,'Kiran','Yadav','kiran.yadav@example.com','9090909095','B.Sc. Data Science',8.30,'SQL, Power BI, Data Visualization',2024,'Placed','2025-02-22 13:14:13'),(12,'Ravi','Gupta','ravi.gupta@example.com','9191919197','B.Tech ECE',7.60,'IoT, Arduino, Raspberry Pi',2025,'Unplaced','2025-02-22 13:14:13'),(13,'Sneha','Mishra','sneha.mishra@example.com','8787878781','B.E. IT',8.40,'JavaScript, React, Firebase',2025,'Placed','2025-02-22 13:14:13'),(14,'Arjun','Pandey','arjun.pandey@example.com','9898989892','B.E. Electrical',7.90,'MATLAB, Power Systems',2024,'Unplaced','2025-02-22 13:14:13'),(15,'Komal','Chopra','komal.chopra@example.com','7676767672','B.Tech AI',9.00,'Machine Learning, Python, OpenCV',2025,'Placed','2025-02-22 13:14:13'),(16,'Nitin','Goel','nitin.goel@example.com','9192939491','B.E. Computer Science',8.10,'Full Stack Development, PostgreSQL',2025,'Unplaced','2025-02-22 13:14:13'),(17,'Deepika','Das','deepika.das@example.com','9091929391','B.Tech Cyber Security',8.50,'Ethical Hacking, Kali Linux',2024,'Placed','2025-02-22 13:14:13'),(18,'Sahil','Kapoor','sahil.kapoor@example.com','8282838481','B.E. Mechanical',7.30,'Automobile Design, SolidWorks',2024,'Unplaced','2025-02-22 13:14:13'),(19,'Varun','Mehta','varun.mehta@example.com','9895969491','B.Sc. IT',7.80,'Web Development, Java',2025,'Unplaced','2025-02-22 13:14:13'),(20,'Pooja','Jain','pooja.jain@example.com','8788899092','B.Tech CSE',9.20,'Blockchain, Smart Contracts',2025,'Placed','2025-02-22 13:14:13'),(21,'Harshit','Dewan','harshit.dewan@example.com','9192949592','B.E. Electronics',8.70,'VLSI, FPGA',2025,'Unplaced','2025-02-22 13:14:13'),(22,'Ananya','Rao','ananya.rao@example.com','7071727371','B.Tech IT',8.60,'Cloud Computing, AWS',2025,'Placed','2025-02-22 13:14:13');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-11 20:16:57
