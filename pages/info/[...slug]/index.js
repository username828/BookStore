import { useRouter } from "next/router";

export default function Info(){
    const r=useRouter();
    const slug=r.query.slug

    if(!slug){
        return <p>Loading...</p>
    }

    if(slug[0]==="faqs"){
        return(
        <>
            <h1>Frequently Asked Questions</h1>
            Q1: How do I purchase a book?<br/><br/>
A: To purchase a book, browse through our collection in the Books section, select the book you want, and click on "View Details." From there, you’ll find a link to make your purchase.
<br/><br/>
Q2: Can I read a book preview?<br/><br/>
A: Yes! Click on any book title to view details, including a short preview if available.
<br/><br/>
Q3: How can I contact customer support?<br/><br/>
A: Visit our Support page for contact information and support resources.
<br/><br/>
Have more questions? Reach out to us via the Support page or check back for updates as we add new FAQs!
        </>
        
    
    )

    }

    if(slug[0]==="support"){
        return(
        <>
        <h1>Support Information</h1>
        Welcome to the BookStore Support Center! Whether you need help with your account, navigating the site, or purchasing books, we’re here for you.
        <br/><br/>
Support Resources:
<br/><br/>
Account Issues: Forgot your password? Trouble logging in? Contact us at support@bookstore.com for assistance.<br/><br/>
Purchases and Orders: If you have questions about your order, email orders@bookstore.com, and our team will assist you.<br/><br/>
Technical Issues: For technical help, check our FAQs or contact tech@bookstore.com.<br/><br/>
Our team strives to respond within 24 hours. For urgent issues, please mention "URGENT" in your email subject line. Thank you for choosing BookStore!<br/><br/>
        
        </>)
    }

    else{
        return(
        <>
            Page not found
        </>)
    }
}