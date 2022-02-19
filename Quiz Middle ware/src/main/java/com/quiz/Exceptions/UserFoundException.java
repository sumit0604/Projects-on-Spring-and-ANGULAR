package com.quiz.Exceptions;
public class UserFoundException extends Exception{

    public UserFoundException(){
        super("User with this Username is  present in DB!! try with another credentials!");
    }

    public UserFoundException(String msg){
        super(msg);
    }
}
