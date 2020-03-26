<?php


namespace BxUI\Component;


use BxHelper\Helper\Html;

/**
 * Class Counter
 * @package BxUI\Component
 * @license MIT
 *
 * @author AlexP007
 * @email alex.p.panteleev@gmail.com
 * @link https://github.com/AlexP007/bx-ui
 */
class Counter extends Basic
{
    const DATA_TYPE = 'bx-ui-counter';

    protected function create(): array
    {
        $helper = Html::getInstance();
        $params = $this->params;

        return [
            $helper->span($params['content'], $params['class'], [
                'attributes' => [
                    'id'        => $params['id'],
                    'data-min'  => "${params['min']}",
                    'data-max'  => "${params['max']}",
                    'data-type' => self::DATA_TYPE,
                ]
            ])
        ];
    }
}