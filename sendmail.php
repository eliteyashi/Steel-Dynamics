
<?php


$enquiry = "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">
<html xmlns=\"http://www.w3.org/1999/xhtml\">
<head>
<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" />
<title>Contact Form</title>
</head>

<body>
<table width=\"400\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">
  <tr>
    <td width=\"20%\" height=\"25\">Name</td>
    <td>$name</td>
  </tr>
  <tr>
    <td height=\"25\">Email</td>
    <td>$email</td>
  </tr>
  <tr>
    <td height=\"25\">Contact</td>
    <td>$contact</td>
  </tr>
  <tr>
    <td height=\"25\">Interest</td>
    <td>$interest</td>
  </tr>
  <tr>
    <td height=\"25\">Message</td>
    <td>$message</td>
  </tr>
</table>
</body>
</html>";

$receiver = "anjana@elite-web.co.uk" ;

	mail($receiver,"Steel Dynamics Contact Form",$enquiry,"From: www.steel-dynamics.co.uk <noreply@steel-dynamics.co.uk>\r\nContent-Type:text/html;charset=ISO-8859-1");
//after do this all, open tha page you want
?>
