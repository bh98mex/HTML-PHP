<?php

class Position
{
    //piece position on the board
	public $x;
	public $y;

        
        public function __construct($x, $y)
        {

            $this->x = $x;
            $this->y = $y;
        }
        
        public function __toString()
        {
            return '[' . $this->x . ', ' . $this->y . ']';
        }
}