<!DOCTYPE html>
<html lang="nl-NL">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="Omid Barza frontend test for Youwe Co.">
    <title>CuraNu Contact Form</title>
    <?php include('app/head.phtml') ?>
</head>
<body id="contact_page" class="contact">
    <!-- <<< Page Wrapper -->
    <div class="page-wrapper">
        <?php include('app/header.phtml') ?>
    
        <!-- <<< Main Area -->
        <section class="main">
            <div class="container row">
                <?php include('app/contact/sidebar.phtml') ?>
                <?php include('app/contact/content.phtml') ?>
            </div>
        </section>
        <!-- >>> Main Area -->
        
        <footer class="m3"></footer>
    </div>
    <!-- >>> Page Wrapper -->
</body>
</html>
