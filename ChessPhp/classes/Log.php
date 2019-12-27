<?php

class Log
{
    private static $colors = array
        (
            //color text for different warnings in the log
            'info' => 'black',
            'warning' => 'yellow',
            'error' => 'red',
            'success' => 'green',
            'game' => 'black',
            'debug' => 'grey'
        );

    private $messages;

    public function __construct()
    {
        $this->messages = array();
        $this->Add('---------- Turn #1 ----------', 'game');
        echo "";
    }

    public function Add($message, $type)
    {
        //add a new display in the log
        $this->messages[] = array(
            'content' => $message,
            'date' => new DateTime(),
            'type' => $type
        );

    }

    public function Display($date = true)
    {
        //actual display in the log
        $counter = 0;
        foreach($this->messages as $message)
        {
            $string = '';

            if ($date)
           $string .= '[<i>' . $message['date']->format('h:i:s') . '</i>] ';

            $string .= '<span style="color:' . Log::$colors[$message['type']] . ';"> ' . $message['content'] . '</span>';

            echo $string . '<br />';
            $counter++;
        }
    }

    public function Clear()
    {
        //clear the logs
        $this->messages = array();
    }
}