package com.google.sps.servlets;

import com.google.sps.data.ServerStats;
import com.google.gson.Gson;
import java.io.IOException;
import java.util.Date;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;

@WebServlet("/server-stats")
public final class ServerStatsServlet extends HttpServlet {
    
    private ArrayList<String> attributeList = new ArrayList<String>();
    
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        // Calculate Variables for people
        while(attributeList.size() != 0)
            attributeList.remove(0);
        attributeList.add("Tommy 18 male");
        attributeList.add("Google 40 N/a");
        attributeList.add("Gabriel 21 female");

        // Convert stats to JSON
        String json = convertToJson(attributeList);

        response.setContentType("application/json;");
        response.getWriter().println(json);
    }

    private String convertToJson(ArrayList<String> list) {
        String json = "";
        for(int i = 0; i < list.size(); i++) {
            json += list.get(i) + " ";
        }
        return json;
    }
    
}

