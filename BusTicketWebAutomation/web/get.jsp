


<%@ page import="java.io.*" %>
<%@ page language="java" import="java.sql.*"%>
<%@ page import="java.sql.Connection"%>
<%@ page import="java.sql.DriverManager"%>
<%@ page import="java.sql.ResultSet"%>
<%@ page import="java.sql.Statement"%>
<%@ page import="org.json.simple.JSONArray"%>
<%@ page import="org.json.simple.JSONObject"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<% 

    //Create list
    JSONArray list =new JSONArray();
    
     //determine some features
    Connection conn;
    ResultSet rs;
    Class.forName("org.apache.derby.jdbc.ClientDriver");
    
    //Create database connection
    String dburl="jdbc:derby://localhost:1527/ticket";
    String user="root";
    String pass="1997";
    conn=DriverManager.getConnection(dburl,user,pass);
    
    //create query
    String query="select *from busticket";
    Statement stmt=conn.createStatement();
    rs=stmt.executeQuery(query);
    
    while(rs.next()){
    
        JSONObject obj = new JSONObject();
        
        String name=rs.getString("name");
        String surname=rs.getString("surname");
        String gender=rs.getString("gender");
        String id=rs.getString("id");
        
        obj.put("name",name);
        obj.put("surname",surname);
        obj.put("gender",gender);
        obj.put("id",id);
        
        list.add(obj);
        
    }
    
    out.println(list.toJSONString());
    out.flush();
    




%>



