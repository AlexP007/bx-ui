<?php


namespace BxUI\Component;


use BxHelper\Helper\Html;

/**
 * Class Select
 * @package BxUI\Component
 * @license MIT
 *
 * @author AlexP007
 * @email alex.p.panteleev@gmail.com
 * @link https://github.com/AlexP007/bx-ui
 */
class Select extends Basic
{
    const CONTAINER = 'bx-ui-select-container';
    const LIST_STYLE = 'display: none;';
    const ICON = 'bx-ui-select-icon';

    protected function create(): array
    {
        $helper = Html::getInstance();
        $params = $this->params;

        $content = implode([
            $helper->span($params['prompt']),
            $helper->select($params['name'], $params['options'], [
                'attributes' => [
                    'style'            => self::LIST_STYLE,
                    'data-type'        => $params['type'],
                    'data-list-class'  => $params['list_class'],
                    'data-list-active' => $params['list_active_class'],
                ],
                'prompt' => $params['prompt'],
            ]),
            $helper->div(null, $params['icon_closed'], [
                'attributes' => [
                    'data-opened' => $params['icon_opened'],
                    'data-closed' => $params['icon_closed'],
                    'data-type'   => self::ICON,
                ]
            ]),
        ]);

        return [
            $helper->div($content, $params['class'], [
                'attributes' => ['data-type' => self::CONTAINER]
            ]),
        ];
    }
}
