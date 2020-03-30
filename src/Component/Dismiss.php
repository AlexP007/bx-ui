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
    const DATA_HIDE = 'hide';
    const DATA_REMOVE = 'remove';
    const TYPE = 'button';

    protected function create(): array
    {
        $helper = Html::getInstance();
        $params = $this->params;

        if ($params['role'] === 'hide') {
            $role = self::DATA_HIDE;
        } elseif ($params['role'] === 'remove') {
            $role = self::DATA_REMOVE;
        }

        $content = $params['content'] ?? 'x';
        $content = $helper->span($content);

        return [
            $helper->button(null, $content, self::TYPE, [
                'attributes' => [
                    'id'        => $params['id'],
                    'style'     => $params['style'],
                    'class'     => $params['class'],
                    'data-role' => $role,
                    'data-type' => self::DATA_TYPE,
                ]
            ])
        ];
    }
}
