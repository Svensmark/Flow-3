package sequential;

/*
 * Code taken from
 * http://crunchify.com/how-to-get-ping-status-of-any-http-end-point-in-java/
 */
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class Hello {

    public static void main(String args[]) throws Exception {

        String[] hostList = {"http://crunchify.com", "http://yahoo.com",
            "http://www.ebay.com", "http://google.com",
            "http://www.example.com", "https://paypal.com",
            "http://bing.com/", "http://techcrunch.com/",
            "http://mashable.com/", "http://thenextweb.com/",
            "http://wordpress.com/", "http://cphbusiness.dk/",
            "http://example.com/", "http://sjsu.edu/",
            "http://ebay.co.uk/", "http://google.co.uk/",
            "http://www.wikipedia.org/",
            "http://dr.dk", "http://pol.dk", "https://www.google.dk",
            "http://phoronix.com", "http://www.webupd8.org/",
            "https://studypoint-plaul.rhcloud.com/", "http://stackoverflow.com",
            "http://docs.oracle.com", "https://fronter.com",
            "http://imgur.com/", "http://www.imagemagick.org"
        };

        ExecutorService executor = Executors.newCachedThreadPool();
        List<Future<String>> futureList = new ArrayList();

        for (int i = 0; i < hostList.length; i++) {
            final String url = hostList[i];
            final String status = getStatus(url);

            Future<String> future = executor.submit(new Callable<String>() {
                public String call() throws Exception {
                    System.out.println("Getting status from " + url);
                    return url + "\t\tStatus:" + status;
                }
            });
            futureList.add(future);
        }
        System.out.println("finished");
        for (Future future : futureList) {
            System.out.println(future.get());
        }

    }

    
    public static String getStatus(String url) throws IOException {

        String result = "Error";
        try {
            URL siteURL = new URL(url);
            HttpURLConnection connection = (HttpURLConnection) siteURL.openConnection();
            connection.setRequestMethod("GET");
            connection.connect();

            int code = connection.getResponseCode();
            if (code == 200) {
                result = "Green";
            }
            if (code == 301) {
                result = "Redirect";
            }
        } catch (Exception e) {
            result = "->Red<-";
        }
        return result;
    }

}
