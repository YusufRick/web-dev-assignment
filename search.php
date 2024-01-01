<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Search Course</title>
<link rel="stylesheet" href="css/mobile.css" />
<link
      rel="stylesheet"
      href="css/desktoptest.css"
      media="only screen and (min-width : 720px)"
    />
</head>
<body>
<?php
include("includes/header.php");
?>
<div class="mainContainer">
  <main>
    
      <h1 class="banner">Search Course</h1>
    <section class="twoColumn">
      <div>
        <div class="searchForm">
          <form>
            <div>
              <label for="q">Search:</label>
              <input type="text" name="q" />
            </div>
            <div>
              <input type="submit" value="Search for a Course" />
            </div>
          </form>
        </div>
        <?php
        echo "<div class=\"CourseDetails\">";
        echo "<div>";
        echo "<img src=\"images/{$obj->filmImage}\" alt=\"{$obj->filmTitle}\">";
        echo "</div>";
        echo "<div>";
        echo "<p>{$obj->filmDescription}</p>";
        echo "</div>";
        echo "</div>";
        ?>
      </div>

<script src="js/main.js"></script>
</body>
</html>
