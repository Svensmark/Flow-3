package CryptoCurrencyExcercise;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class facade {

    private static final String[] SYMBOLS = {"ADATUSD", "ATOMTUSD", "BATTUSD", "BNBTUSD", "BTCTUSD", "EOSTUSD", "ETCTUSD", "ETHTUSD", "LTCTUSD", "NEOTUSD", "TRXTUSD", "XRPTUSD"};
    
    public facade() {
    }

    public static void main(String[] args) throws Exception{
        System.out.println(mapAll());
    }

    public static Map<String, Double> mapAll() throws Exception{
        
        final Map<String, Double> values = new HashMap();
        final ExecutorService executor = Executors.newCachedThreadPool();

        for (int i = 0; i < SYMBOLS.length; ++i) {
            int j = i;
            Future<String[]> future = executor.submit(new Callable<String[]>() {
                public String[] call() throws Exception {
                    String[] a = {SYMBOLS[j],getBySymbol(SYMBOLS[j])};
                    return a;
                }
            });
            System.out.println(future.get()[0]);
            System.out.println(Double.parseDouble(future.get()[1]));
            values.put(future.get()[0], Double.parseDouble(future.get()[1]));
        }
        return values;
    }

    public final static String getBySymbol(String symbol) {
        String url = "https://api.binance.com/api/v3/avgPrice?symbol=" + symbol;
        HttpURLConnection connection = null;
        String data = "";
        String price = "";
        
        try {
            URL siteURL = new URL(url);
            connection = (HttpURLConnection) siteURL.openConnection();
            connection.setRequestMethod("GET");
            connection.connect();

            InputStream inStream = connection.getInputStream();
            data = new Scanner(inStream, "UTF-8").useDelimiter("\\Z").next();
            
            price = data.split(",")[1];
            price = price.replaceAll("[^0-9.]", "");
            
        } catch (IOException e) {
        } finally {
            if (connection != null) {
                try {
                    connection.disconnect();
                } catch (Exception ex) {
                }
            }
        }
        return price;
    }

}
