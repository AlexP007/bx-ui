<?php


namespace BxUI\Component;


use BxHelper\Helper\Html;

/**
 * Class CounterControl
 * @package BxUI\Component
 * @license MIT
 *
 * @author AlexP007
 * @email alex.p.panteleev@gmail.com
 * @link https://github.com/AlexP007/bx-ui
 */
class CounterControl extends Basic
{
    const DATA_TYPE = 'bx-ui-counter-control';
    const DATA_INC = 'inc';
    const DATA_DEC = 'dec';

    protected function create(): array
    {
        $helper = Html::getInstance();
        $params = $this->params;

        if ($params['role'] === 'inc') {
            $role = self::DATA_INC;
        } elseif ($params['role'] === 'dec') {
            $role = self::DATA_DEC;
        }

        return [
            $helper->span($params['content'], $params['class'], [
                'attributes' => [
                    'id'              => $params['id'],
                    'data-counter-id' => $params['counter_id'],
                    'data-step'       => $params['step'], // шаг
                    'data-role'       => $role,
                    'data-type'       => self::DATA_TYPE,
                ]
            ])
        ];
    }
}