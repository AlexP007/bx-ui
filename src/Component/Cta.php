<?php


namespace BxUI\Component;


use BxHelper\Helper\Html;

/**
 * Class Cta
 * @package BxUI\Component
 * @license MIT
 *
 * @author AlexP007
 * @email alex.p.panteleev@gmail.com
 * @link https://github.com/AlexP007/bx-ui
 */
class Cta extends Basic
{
    const DATA_TYPE = 'bx-ui-cta';

    protected function create(): array
    {
        $helper = Html::getInstance();
        $params = $this->params;

        return [
            $helper->button(
                $params['name'],
                $params['text'],
                $params['type'],
                [
                    'attributes' => [
                        'class'       => $params['class'],
                        'id'          => $params['id'],
                        'data-type'   => self::DATA_TYPE,
                        'data-active' => $params['active'], // класс активной кнопки
                        'data-link'   => $params['link'], // закладка на будущеее - обрабатывать frame или ajax
                        'disabled'    => $params['disabled'],
                        'value'       => $params['value']
                    ]
                ]
            )
        ];
    }
}