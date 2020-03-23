<?php


namespace BxUI\Component;


use BxHelper\Helper\Html;

use BxUI\Helper\UI;

/**
 * Class sliderFrame
 * @package BxUI\Component
 * @license MIT
 *
 * @author AlexP007
 * @email alex.p.panteleev@gmail.com
 * @link https://github.com/AlexP007/bx-ui
 */
class SliderFrame extends Basic
{
    const CONTAINER = 'bx-ui-sliderframe-container';
    const BODY = 'bx-ui-sliderframe-body';
    const DATA_DISMISS_VALUE = 'Y';

    protected function create(): array
    {
        $helper = Html::getInstance();
        $params = $this->params;
        $dismiss = $params['dismiss'] ?? [];
        $heading = $params['heading'];

        $headerContent = [
            UI::getInstance()->dismiss($dismiss)
        ];
        if (!empty($heading) ) {
            array_unshift($headerContent,
                $helper->heading(
                    $heading['type'],
                    $heading['content'],
                    $heading['params']
                ));
        }

        $body = $helper->div(null, null, [
            'attributes' => ['data-type' => self::BODY]
        ]);

        $content = implode(array_merge($headerContent, $body) );

        return [
            $helper->div($content, $params['class'], [
                'id'           => $params['id'],
                'style'        => $params['style'],
                'data-url'     => $params['url'],
                'data-type'    => self::BODY,
                'data-dismiss' => self::DATA_DISMISS_VALUE,
            ])
        ];
    }
}