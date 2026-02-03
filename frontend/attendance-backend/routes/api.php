<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\EmployeeController;
use App\Http\Controllers\Api\AttendanceController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/users', [UserController::class, 'index']);   // 👈 LIST
    Route::post('/users', [UserController::class, 'store']); // 👈 ADD
});

Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
});

Route::post('/employee', [EmployeeController::class, 'store']);
Route::get('/employees', [EmployeeController::class, 'index']);

Route::post('/check-in', [AttendanceController::class, 'checkIn']);
Route::post('/check-out', [AttendanceController::class, 'checkOut']);
Route::get('/attendance', [AttendanceController::class, 'index']);
Route::get('/dashboard-stats', [DashboardController::class, 'stats']);
