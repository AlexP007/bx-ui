<?php


namespace BxUI\Component;


use BxHelper\Helper\Html;

/**
 * Class Dismiss
 * @package BxUI\Component
 * @license MIT
 *
 * @author AlexP007
 * @email alex.p.panteleev@gmail.com
 * @link https://github.com/AlexP007/bx-ui
 */
class Dismiss extends Basic
{
    const DATA_TYPE = 'bx-ui-dismiss';
    const TYPE = 'button';

    protected function create(): array
    {
        $helper = Html::getInstance();
        $params = $this->params;

        $content = $params['content'] ?? 'x';
        $content = $helper->span($content);

        return [
            $helper->button(null, $content, self::TYPE, [
                'attributes' => [
                    'id'        => $params['id'],
                    'style'     => $params['style'],
                    'class'     => $params['class'],
                    'data-type' => self::DATA_TYPE,
                ]
            ])
        ];
    }
}