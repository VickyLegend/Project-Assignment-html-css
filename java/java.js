import java.io.*;

public class SmatoGlobalRSSWebsite {
    public static void main(String[] args) {
        System.out.println("Welcome to the SMATO GLOBAL RSS Website!");

        // Processing user input
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
        try {
            System.out.println("Please enter the page you want to visit: ");
            String page = reader.readLine();

            // Handling page navigation
            if (page.equalsIgnoreCase("services")) {
                displayServicesPage();
            } else if (page.equalsIgnoreCase("about")) {
                displayAboutPage();
            } else if (page.equalsIgnoreCase("booking")) {
                displayBookingPage();
            } else if (page.equalsIgnoreCase("contact")) {
                displayContactPage();
            } else {
                System.out.println("Page not found. Please enter a valid page name.");
            }
        } catch (IOException e) {
            System.out.println("Error reading input.");
            e.printStackTrace();
        }
    }

    public static void displayServicesPage() {
        System.out.println("SERVICES PAGE");
        System.out.println("===============");
        System.out.println("Our Services:");
        System.out.println("- News Alerts");
        System.out.println("- Customized News Feeds");
        System.out.println("- Advertisement Placement");
    }

    public static void displayAboutPage() {
        System.out.println("ABOUT PAGE");
        System.out.println("===============");
        System.out.println("Welcome to SMATO GLOBAL RSS!");
        System.out.println("We are a leading provider of RSS solutions, delivering");
        System.out.println("customized news feeds and alerts tailored to your needs.");
    }

    public static void displayBookingPage() {
        System.out.println("BOOKING PAGE");
        System.out.println("===============");
        System.out.println("To book our services, please fill out the form on our website.");
        System.out.println("We will get back to you shortly with further details.");
    }

    public static void displayContactPage() {
        System.out.println("CONTACT PAGE");
        System.out.println("===============");
        System.out.println("To get in touch with us, please use the contact details below:");
        System.out.println("Email: contact@smatoglobalrss.com");
        System.out.println("Phone: +1-234-567-8901");
    }
}