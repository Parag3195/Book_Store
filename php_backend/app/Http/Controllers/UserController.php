<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
// use App\Models\book ;

class UserController extends Controller
{
    //

    function get()
    {
        $users = User::all();
        return response()->json($users, 200);

    }

    function show($id)
    {
    $users = User::find($id);
    if (!$users) {
        return response()->json(['message' => 'Book not found'], 404);
    }
    return response()->json($users, 200);
    }

     function insert(Request $req)
     {
        $user = new User;
        $user->title=$req->input('title');
        $user->author=$req->input('author');
        $user->publishYear=$req->input('publishYear');
        $user->img=$req->input('img');
        $user->save();
        return $req->input();

     }

     function update(Request $request, $id)
    {
        $users = User::find($id);

        if (!$users) {
            return response()->json(['message' => 'Book not found'], 404);
        }

        // Validate and sanitize the input data
        $validatedData = $request->validate([
            'title' => 'string',
            'author' => 'string',
            'publishYear' => 'integer',
            'img' => 'string',
        ]);

        // Update the book attributes
        $users->fill($validatedData);
        $users->save();

        return response()->json($users, 200);
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
 