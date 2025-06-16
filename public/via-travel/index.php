<!DOCTYPE html>
<html lang="en">

<?php include 'inc/head.php' ?>

<body>
    <?php include 'inc/navigation.php' ?>
    <?php include 'inc/via-rails.php' ?>

    <script>
        var nav_target = document.getElementById("navigation_menu");
        var nav_trigger = document.getElementById("nav_toggle");

        function toggle_nav_menu() {
            if (nav_target && nav_trigger) {
                nav_target.classList.toggle("active");
                nav_trigger.classList.toggle("active");
            }
        }
    </script>
</body>

</html>