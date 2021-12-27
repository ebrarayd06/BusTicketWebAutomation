
<%@ page import="java.io.*" %>
<%@ page language="java" import="java.sql.*"%>
<%@ page import="org.json.simple.JSONArray"%>
<%@ page import="org.json.simple.JSONObject"%>
<%@ page import="java.sql.Connection"%>
<%@ page import="java.sql.DriverManager"%>
<%@ page import="java.sql.ResultSet"%>
<%@ page import="java.sql.PreparedStatement"%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>

<% 

    //Create list
    JSONArray list =new JSONArray();
    //create object
    JSONObject obj = new JSONObject();
    
    //take data from form
    String name=request.getParameter("name");
    String surname=request.getParameter("surname");
    String gender=request.getParameter("gender");
    String id=request.getParameter("id");
    
    Class.forName("org.apache.derby.jdbc.ClientDriver").newInstance();
    
    //Create database connection
    String dburl="jdbc:derby://localhost:1527/ticket";
    String user="root";
    String pass="1997";
    
    Connection conn=DriverManager.getConnection(dburl,user,pass);
    
    //create query
    PreparedStatement pst=conn.prepareStatement("update busticket SET name=?,surname=?,gender=? WHERE id=?");
    pst.setString(1,name);
    pst.setString(2,surname);
    pst.setString(3,gender);
    pst.setString(4,id);
    pst.executeUpdate();
    
    obj.put("name",name);
    obj.put("surname",surname);
    obj.put("gender",gender);
    obj.put("id",id);
    list.add(obj);
    
    out.println(obj);
    out.flush();








%>
</html>
