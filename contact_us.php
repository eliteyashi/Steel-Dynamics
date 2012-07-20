<?php include 'inc/header-contact.php' ?>



<section class="page_header container_16 bg clearfix">

<div class="page_header_title grid_5 alpha omega">
<div class="page_title single"><span>CONTACT US</span></div>
<div class="page_header_bottom"></div>
</div>
<div class="page_image grid_11 alpha omega">
<img src="img/page_header_image/contact_us.jpg" width="680">

</div>

</section>


<section class="bg container_16">

<div class="breadcrumb grid_16 alpha omega"><!--<a href="/index.html"><img src="img/breadcrumb_home.png"></a> <img src="img/breadcrumb_arrow.png">-->

<ul class="breadcrumb_link_container">
		<li><a href="htmlfiles/index.php"><img src="img/breadcrumb_home.png"></a></li>
		<li><a href="htmlfiles/contact_us.php">Conatct Us</a></li>
		
</ul>



</div>


</section>

<form id="sd" name="sd" method="post" action="">
<section class="container_16 bg clearfix">

<section class="grid_8 ">
<div class="grid_8 titles clearfix">GET IN TOUCH WITH US</div>


<div class="form_container grid_8 alpha omega">

<div class="grid_2 form_lable">Name :</div>
<div class="grid_5"><input name="name" type="text" class="form_field" id="name" value="<?=($name=="" ? "" : $name) ?>"></div>
<div class="grid_2 form_lable">Email :</div>
<div class="grid_5"><input name="email" type="text" class="form_field" id="email" value="<?=($name=="" ? "" : $email) ?>"></div>
<div class="grid_2 form_lable">Contact No :</div>
<div class="grid_5"><input name="contact" type="text" class="form_field" id="contact" value="<?=($name=="" ? "" : $contact) ?>"></div>
<div class="grid_2 form_lable">Area of Interest :</div>
<div class="grid_5"><select name="interest" class="select" id="select">

<option value="">Option 1</option>
<option value="">Option 2</option>
<option value="">Option 3</option>
<option value="">Option 4</option>
<option value="">Option 5</option>

</select></div>
<div class="grid_2 form_lable">Message :</div>
<div class="grid_5"><textarea name="message" cols="" rows="" class="form_textfield" id="message"></textarea></div>
<div class="grid_2 form_lable">Spam Check</div>
<div class="grid_2 omega"><input name="spamchk" type="text" class="form_field_spam" id="spamchk"></div>
<div class="grid_3 alpha" style="margin-left:20px;"><?php echo '<img src="' . $_SESSION['captcha']['image_src'] . '" alt="CAPTCHA" />'; ?></div>
<div class="clearfix"></div>
<div class="grid_3 form_lable"></div>
<input type="hidden" name="hideval" value="<?php echo $_SESSION['captcha']['code']; ?>" />
<div class="grid_5"><input name="submit" type="submit" value="" class="form_button" id="submit">


			
</div>


</div>


</section>












<section class="grid_8">
<div class="grid_8 adress_titles clearfix">Address</div>


<div class="form_container grid_8 alpha omega">
<div class="grid_1 adress_ico"></div>
<pre class="address grid_6 clearfix">16 Bradley Fold Industrial Estate
Radcliffe
Bolton
BL2 6RT
United Kingdom 
</pre>
<div class="grid_1 tele_ico"></div>
<div class="tele_no grid_6"><a href="callto:+44 (0)7875 723079">+44 (0)7875 723079</a></div>

<div class="grid_1 fax_ico"></div>
<div class="tele_no grid_6"><a href="callto:+44 (0)0000 000000">+44 (0)0000 000000</a></div>




<div class="grid_7 alpha omega map_container"><iframe width="395" height="229" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps/ms?msa=0&amp;msid=213704545618458567228.0004c429c7d6f97f756ef&amp;ie=UTF8&amp;t=m&amp;ll=53.561597,-2.329059&amp;spn=0.005837,0.016909&amp;z=15&amp;output=embed"></iframe><br /></div>

</div>




</section>


















</section>
</form>


<?php include 'inc/footer.php' ?>