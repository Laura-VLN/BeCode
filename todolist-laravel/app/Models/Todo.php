<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    use HasFactory;
    protected $fillable = [
        'name', 'description', 'done', 'userId'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get user affected to this todo
     */
    public function todoAffectedTo()
    {
        return $this->belongsTo('App\Models\User', 'affectedTo_id');
    }

    /**
     * Get user who affected this todo
     */
    public function todoAffectedBy()
    {
        return $this->belongsTo('App\Models\User', 'affectedBy_id');
    }
}
