<?php

class Piece
{
    protected $position;
    protected $color;
    protected $possibleCells;
    protected $history;
    
    protected function __construct($x, $y, $color)
    {
        $this->position = new Position($x, $y);
        $this->color = $color;
        $this->possibleCells = array();
        $this->history = array();
    }
    
    public function GetPosition()
    {
        //get the position
        return $this->position;
    }
    
    public function GetColor()
    {
        //get the color
        return $this->color;
    }
    
    public function ComputePossibleCells($board)
    {
        //array of all the possible locations
        $this->possibleCells = array();
    }
    
    public function GetPossibleCells()
    {
        return $this->possibleCells;
    }
    
    public function SetPosition($position, $turn)
    {
        //set position and turn of the pieces
        $this->history[] = array($turn, $this->position);
        $this->position = $position;
    }
    
    public function IsFirstMove()
    {
        return (count($this->history) == 0);
    }
    
    public function GetHistory()
    {
        return $this->history;
    }

    public function __toString()
    {
    }
}