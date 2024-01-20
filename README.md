# Cloud-Resume
This is my Resume hosted in the cloud using AWS resources such as **Simple Storage Service (S3), Route 53, AWS Certificate Manager (ACM), and CloudFront**.

<div align="left">
  <strong><ins>Links:</ins></strong>
  
  https://kingsleyonlineresume.net/
  
  https://d3v38u8fz4w40e.cloudfront.net/
  
  http://kingsleyonlineresume.net.s3-website-us-east-1.amazonaws.com

<div align="left">
  <strong><ins>Final look:</ins></strong>
 <a href="https://imgur.com/RMhlWa6"><img src="https://i.imgur.com/RMhlWa6.png" title="source: imgur.com" /></a>
<a href="https://imgur.com/2Uvghd6"><img src="https://i.imgur.com/2Uvghd6.png" title="source: imgur.com" /></a>


<div align="left">
  <strong><ins>Steps:</ins></strong>
  
  1. Create the Code (HTML, CSS, JavaScript) for Your Résumé
 
  2. Create an S3 Bucket and Configure it for Static Website Hosting and Public Access (ensure your S3 bucket name and domain name are the same)
  
  3. Upload your Index.html, Styles.css, Javascript and headshot photo into the S3 bucket
  
  4. Register a New Domain Name with Route 53 (ensure your domain name and S3 bucket name are the same)
  
  5. From Hosted Zones in Route 53, create an A Record with an Alias to Point to the S3 Website.
  
  6. Make your domain website secure by creating a Public TLS/SSL Certificate using AWS Certificate Manager. 
  
  7. Create a CloudFront Distribution
  
  8. Update Route 53 to Point to the CloudFront Distribution

  




