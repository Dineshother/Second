import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
Thank you for contacting the STSA Team at Sainsbury’s. Our team covers 5 main themes across our supply chain:  If your question is relating to one of these areas, a member of our team will be in touch to resolve your query.

If your question is relating to stores or Sainsburys and Argos account's password reset , please contact the Service Desk (0345 603 2638), where the team there will be able to support.

$csv = Import-Csv "C:\Temp\Boooo1.csv"


foreach($l in $csv)
{
$Name = $l.Name

$u = Get-ADUser $Name -Properties info | select name, info
$u | export-csv -path "C:\Temp\UserDetailss.csv" -Append -NoTypeInformation

}

Get-ADUser Mike.Shaw -properties authorig | select name , Authorig

$cred = Get-Credential

Set-ADGroup TTD_support -clear msExchRequireAuthToSendTo -Credential $cred

Get-ADGroup TTD_support -properties msExchRequireAuthToSendTo | select name , msExchRequireAuthToSendTo


Get-ADUser SVCADDMVCENTER401 -Properties info | select name, info

$cred = Get-Credential
$csv = Import-Csv "C:\Temp\Boooo1.csv"

foreach($l in $csv)
{
$Name = $l.Name
$Info = $l.info

$n = Get-ADUser $Name -Properties info | select info -ExpandProperty info

Set-ADUser $Name -Replace @{info="$Info $n"} -Credential $cred

}




