<?php


namespace BxUI\Component;


use BxHelper\Helper\Html;

/**
 * Class InputCounter
 * @package BxUI\Component
 * @license MIT
 *
 * @author AlexP007
 * @email alex.p.panteleev@gmail.com
 * @link https://github.com/AlexP007/bx-ui
 */
class InputCounter extends Basic
{
    const DATA_TYPE = 'bx-ui-inputcounter';

    protected function create(): array
    {
        $helper = Html::getInstance();
        $params = $this->params;

        return [
            $helper->text($params['name'], $params['value'], [
                'attributes' => [
                    'id'        => $params['id'],
                    'class'     => $params['class'],
                    'data-min'  => $params['min'],
                    'data-max'  => $params['max'],
                    'data-type' => self::DATA_TYPE,
                ]
            ])
        ];
    }
}