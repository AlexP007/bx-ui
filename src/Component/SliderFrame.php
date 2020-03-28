<?php


namespace BxUI\Component;


use BxHelper\Helper\Html;

use BxHelper\Html\Iframe;
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
    const CONTAINER_STYLE = 'display: none';
    const BODY = 'bx-ui-sliderframe-body';
    const IFRAME = 'bx-ui-sliderframe-iframe';
    const DATA_DISMISS_VALUE = 'Y';

    protected function create(): array
    {
        $helper = Html::getInstance();
        $params = $this->params;

        $params['style'] = $params['style'] ?? self::CONTAINER_STYLE;

        $dismiss = $params['dismiss'] ?? [];
        $heading = $params['heading'];

        $headerContent = [
            UI::getInstance()->dismiss($dismiss)
        ];
        if (!empty($heading) ) {
            array_push($headerContent,
                $helper->heading(
                    $heading['type'],
                    $heading['content'],
                    [
                        'attributes' => [
                            'class' => $heading['class'],
                            'style' => $heading['style'],
                    ]]
                ));
        }

        $headerContent = implode($headerContent);

        $header = $helper->div($headerContent);

        // создадим айфрейм, чтобы из клиентского кода можно было сразу навесить на него
        $iframe = $helper->iframe(null, null, [
            'attributes' => [
                'id'        => $params['iframe_id'],
                'data-type' => self::IFRAME,
            ]
        ]);

        $body = $helper->div($iframe, null, [
            'attributes' => [
                'data-type' => self::BODY,
            ]
        ]);

        $content = $header . $body;

        return [
            $helper->div($content, $params['class'], [
               'attributes' => [
                   'id'           => $params['id'],
                   'style'        => $params['style'],
                   'data-url'     => $params['url'],
                   'data-type'    => self::CONTAINER,
                   'data-dismiss' => self::DATA_DISMISS_VALUE,
               ]
            ])
        ];
    }
}
