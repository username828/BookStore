import Link from "next/link";

export default function InfoPage(){
    return(
        <>
        <h1> Welcome to the Information Page</h1>
        <p>Welcome to the BookStore Information Center! Here, you can find answers to common questions, browse support resources, and learn more about how to make the most of your BookStore experience.

<br/><br/>Explore the sections below:<br/><br/>

<Link href={"/info/faqs"}>FAQs</Link>: Get quick answers to frequently asked questions.
<br/><br/>
<Link href={"/info/support"}>Support</Link>: Find resources to help you troubleshoot any issues or get in touch with our team.
If you don’t find what you’re looking for, feel free to reach out to us directly. We’re here to help you make the most of your time with BookStore!


        </p>
        </>
    )

}