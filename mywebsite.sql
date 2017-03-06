-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2017-02-28 12:48:18
-- 服务器版本： 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mywebsite`
--

-- --------------------------------------------------------

--
-- 表的结构 `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `time` datetime NOT NULL,
  `content` text CHARACTER SET utf8mb4 NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `articles`
--

INSERT INTO `articles` (`id`, `title`, `time`, `content`, `status`) VALUES
(14, 'asd', '2016-12-12 12:12:11', 'asd', 0),
(15, 'asdasd', '2016-12-12 12:12:11', 'zxczxc', 0),
(16, 'asdasd', '2016-12-12 12:12:11', 'zxczxc', 0),
(17, 'asdasd', '2016-12-12 12:12:11', 'zxczxc', 0),
(18, 'asdasd', '2016-12-12 12:12:11', 'zxczxc', 0),
(19, '0', '2012-12-12 12:12:12', 'asdasda', 0),
(20, 'asdzzxcz', '2012-12-12 12:12:12', 'asdasdazzzzzzz', 1),
(21, 'asdzxczxcz', '2012-12-12 12:12:12', 'asd1111111111zzzzzzzzzzzz', 1),
(22, 'zzzzzzzz', '2012-12-12 12:12:12', 'asdasda', 1),
(23, 'asda', '2012-12-12 12:12:12', 'asdasda', 1),
(24, 'asda', '2012-12-12 12:12:12', 'asdasda', 1),
(25, '这是我的第一篇文章', '2017-12-12 19:16:11', '大发测试测试123123', 1),
(26, 'aaaaaaaaaaaa', '2012-12-12 12:12:12', '   我我我\n啊啊啊', 1),
(27, 'aaaaaaaaaaaa', '2012-12-12 12:12:12', '   我我我\n啊啊啊', 1),
(28, 'aaaaaaaaaaaa', '2012-12-12 12:12:12', '   我我我\n啊啊啊', 1),
(29, 'aaaaaaaaaaaa', '2012-12-12 12:12:12', '   我我我\n啊啊啊', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
