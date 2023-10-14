<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
// use App\Models\book ;

class UserController extends Controller
{
    //

     function register(Request $req)
     {
        $user = new User;
        $user->title=$req->input('title');
        $user->author=$req->input('author');
        $user->publishYear=$req->input('publishYear');
        $user->img=$req->input('img');
        $user->save();
        return $req->input();

     }

     function delete($id){
        $user= User::where('id',$id)->delete();
        if($delete=true){
            return ["result"=>"Product has been deleted."];
        }else{
            return ["result"=>"Product not found."];

        }
        
     }
}
 