<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Attendance;

class AttendanceController extends Controller
{
     public function index()
    {
        return Attendance::all();
    }

    public function checkIn(Request $request)
    {
        $today = date('Y-m-d');
        $now = now();

        $alreadyCheckedIn = Attendance::where('employee_id', $request->employee_id)
            ->where('date', $today)
            ->first();

        if ($alreadyCheckedIn) {
            return response()->json([
                'message' => 'Aaj ka check-in already ho chuka hai'
            ], 409);
        }

        // half day if check-in after 1 PM
        $dayType = $now->hour >= 13 ? 'half' : 'full';

        return Attendance::create([
            'employee_id' => $request->employee_id,
            'date' => $today,
            'check_in' => $now,
            'day_type' => $dayType
        ]);
    }


    public function checkOut(Request $request)
    {
        $today = date('Y-m-d');
        $now = now();

        $attendance = Attendance::where('employee_id', $request->employee_id)
            ->where('date', $today)
            ->first();

        if (!$attendance) {
            return response()->json([
                'message' => 'Aaj ka check-in nahi mila'
            ], 404);
        }

        if ($attendance->check_out) {
            return response()->json([
                'message' => 'Check-out already ho chuka hai'
            ], 409);
        }

        // if checkout before 5 PM → half day
        if ($now->hour < 17) {
            $attendance->day_type = 'half';
        }

        $attendance->check_out = $now;
        $attendance->save();

        return response()->json([
            'message' => 'Check-out successful',
            'day_type' => $attendance->day_type
        ]);
    }


}
