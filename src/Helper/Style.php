<?php


namespace BxUI\Helper;


/**
 * Class Style
 * @package BxUI\Helper
 * @license MIT
 *
 * @author AlexP007
 * @email alex.p.panteleev@gmail.com
 * @link https://github.com/AlexP007/bx-ui
 */
class Style
{
    public static function create(array $styles)
    {
       $result = '';

       foreach ($styles as $key => $value) {
           $result .= "$key:$value;";
       }

       return $result;
    }
}