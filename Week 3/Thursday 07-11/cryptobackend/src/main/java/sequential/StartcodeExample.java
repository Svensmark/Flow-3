/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package sequential;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

/**
 *
 * @author emilt
 */
public class StartcodeExample {

    private static final ExecutorService EXECUTOR = Executors.newCachedThreadPool();
    private static List<Future<String>> futureList = new ArrayList();

    public static void main(String[] args) throws ExecutionException, InterruptedException {
        for (int i = 0; i < 100; i++) {
            Future<String> future = EXECUTOR.submit(new Callable<String>() {
                public String call() throws Exception {
                    return Thread.currentThread().getName();
                }
            });
            futureList.add(future);
        }
        for (Future future : futureList) {
            System.out.println(future.get());
        }
        }

    }
