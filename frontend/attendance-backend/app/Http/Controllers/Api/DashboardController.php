<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Attendance;
class DashboardController extends Controller
{
    public function stats()
    {
        $today = date('Y-m-d');

        $totalEmployees = User::count();

        $presentToday = Attendance::where('date', $today)->count();

        $absentToday = $totalEmployees - $presentToday;

        return response()->json([
            'totalEmployees' => $totalEmployees,
            'presentToday' => $presentToday,
            'absentToday' => $absentToday
        ]);
    }
}
