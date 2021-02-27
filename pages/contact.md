---
layout: layouts/page.njk
title: Contact Me
templateClass: tmpl-page
eleventyNavigation:
  key: Contact Me
  order: 7
image: '/img/pages/image4.jpg'
---

<div class="container">

<h2>Get in touch with me..</h2>

<form name="contact-form" method="POST" data-netlify="true" data-netlify-recaptcha="true" action="/">
  
  <!-- First name -->
  <div class="mt-4 mb-4">
    <label class="form-label" for="firstname" >First name:</label>
    <input type="text" class="form-control" id="firstname"  name="firstname" placeholder="First name" required>
  </div>
  
  <!-- Last Name -->
  <div class="mt-4 mb-4">
    <label class="form-label" for="surname" >Last Name:</label>
    <input type="text" class="form-control" id="surname"  name="surname" placeholder="Last Name" required>
  </div>

  <!-- Email address -->
  <div class="mb-4">
    <label class="form-label" for="email">Your email address:</label>
    <input type="email" class="form-control" id="email" name="email" placeholder="Email address" required>
  </div>
  
  <!-- Message -->
  <div class="mb-4">
    <label class="form-label" for="message">Your Message:</label>
    <textarea class="form-control" id="message" name="message" placeholder="Please enter your message" required></textarea>
  </div>

  <!-- T&Cs -->
<div class="form-check mb-4">
  <p>
    <input class="form-check-input" type="checkbox" value="" id="terms" name="terms" required>
    <label class="form-check-label" for="terms">
      I have read and agree to the terms and conditions
    </label>
  </p>

  <p>
    <input class="form-check-input" type="checkbox" value="" id="marketing" name="marketing">
    <label class="form-check-label" for="marketing">
      I consent to marketing communications
    </label>
  </p>

</div>

  <!-- Add recaptcha-->
  <div class="mb-4" data-netlify-recaptcha="true"></div>

  <!-- Submit -->
  <button class="btn btn-danger" type="submit">Send</button>

  
</form>

</div>